# Supabase Troubleshooting Guide

## Quick Start Diagnostics

If your form isn't submitting data to Supabase, run these diagnostics:

```javascript
// In browser console
import { runFullDiagnostics } from './src/utils/supabaseDiagnostics';
await runFullDiagnostics();
```

## Common Issues & Solutions

### 1. RLS Policy Violation (Most Common)
**Error:** `new row violates row-level security policy`

**Solution:** Run this SQL in your Supabase SQL editor:
```sql
-- Enable RLS
ALTER TABLE lead_consultations ENABLE ROW LEVEL SECURITY;

-- Allow anonymous inserts
CREATE POLICY "Allow anonymous inserts" 
ON lead_consultations 
FOR INSERT 
TO anon 
WITH CHECK (true);

-- Grant permissions
GRANT INSERT ON lead_consultations TO anon;
GRANT USAGE ON SCHEMA public TO anon;
```

### 2. Missing Environment Variables
**Check:** `.env` file contains:
```
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

### 3. Table Doesn't Exist
**Solution:** Run the migration files in `/supabase/migrations/`

### 4. Schema Mismatch
**Check:** Form data matches table columns:
- name (text)
- email (text) 
- service (text)
- company (text)
- problems (text)
- additional_info (text, optional)

## Debugging Tools

### Browser Console
1. Open Developer Tools (F12)
2. Go to Console tab
3. Look for red error messages
4. Run diagnostic functions

### Supabase Dashboard
1. Go to your project dashboard
2. Check "Logs" section for server errors
3. Verify table structure in "Table Editor"
4. Check RLS policies in "Authentication > Policies"

### Network Tab
1. Open Developer Tools > Network
2. Submit form and look for failed requests
3. Check request/response details

## Prevention Best Practices

### 1. Always Use Try-Catch
```javascript
try {
  const { data, error } = await supabase
    .from('table')
    .insert(data);
  
  if (error) throw error;
} catch (err) {
  console.error('Detailed error:', err);
}
```

### 2. Validate Data Before Submission
```javascript
const validateData = (data) => {
  const required = ['name', 'email', 'service'];
  const missing = required.filter(field => !data[field]);
  if (missing.length) throw new Error(`Missing: ${missing.join(', ')}`);
};
```

### 3. Test RLS Policies
```javascript
// Test anonymous insert
const testInsert = async () => {
  const { error } = await supabase
    .from('table')
    .insert({ test: 'data' });
  
  console.log(error ? 'Failed' : 'Success');
};
```

### 4. Monitor Logs
- Enable real-time logs in Supabase dashboard
- Use structured logging in your app
- Set up error tracking (Sentry, etc.)

## Emergency Contacts

If all else fails:
- Email: infinitydata.team@gmail.com
- Include: Error messages, browser console logs, and steps to reproduce