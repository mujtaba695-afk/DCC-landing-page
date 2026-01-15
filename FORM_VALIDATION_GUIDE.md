# Form Validation Implementation Guide

## Overview
All lead forms on the DCC landing page now have **strict email and phone validation** with real-time error feedback. Users cannot submit invalid data.

## Validation Rules

### Email Validation
- **Pattern**: `[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}`
- **Examples of valid emails**:
  - `john@company.ae`
  - `sales@example.com`
  - `user.name+tag@domain.co.uk`
- **Examples of invalid emails**:
  - `john@` (missing domain)
  - `@company.ae` (missing user part)
  - `john.company.ae` (missing @)
  - `john@.com` (missing domain name)

### Phone Validation
- **Pattern**: `^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`
- **Examples of valid phone numbers**:
  - `+971 50 123 4567`
  - `050 123 4567`
  - `+1 (555) 123-4567`
  - `+971-50-123-4567`
  - `050.123.4567`
  - `0501234567`
- **Examples of invalid phone numbers**:
  - `050` (too short)
  - `12345` (too short)
  - `abc 123 4567` (contains letters)
  - `050 123` (missing numbers)

## Forms Covered

All forms on the page now have validation:
1. **Contact Form** (Bottom section) - `#contactForm`
2. **Slide-over Enquiry Form** (Modal popup) - `#calcLeadForm`

## How It Works

### Real-time Validation (Blur & Input Events)
- Users see error messages **as they type** for the email and phone fields
- When user focuses away from a field (blur), validation checks occur
- When user corrects the input, error messages **automatically disappear**

### Form Submission Validation
- When user clicks "Enquire Now" or "Submit", the form is validated before submission
- If phone or email is invalid, submission is **blocked** with error message
- Form cannot be submitted until all fields are valid

### Error Message Display
- **Error styling**: Red border, light red background, error icon
- **Error message**: Clear, actionable guidance (e.g., "Please enter a valid email address (e.g., john@company.ae)")
- **Placement**: Error message appears directly below the invalid field
- **Auto-clear**: Errors disappear when user corrects the input

## Visual Feedback

### Invalid Input State
```
┌─────────────────────────────────┐
│ Email                           │
│ ┌─────────────────────────────┐ │
│ │ john@ (RED BORDER)          │ │ ← Field turns red
│ └─────────────────────────────┘ │
│ ✗ Invalid email format          │ ← Error message appears
└─────────────────────────────────┘
```

### Valid Input State
```
┌─────────────────────────────────┐
│ Email                           │
│ ┌─────────────────────────────┐ │
│ │ john@company.ae             │ │ ← Field turns normal
│ └─────────────────────────────┘ │
│ (no error message)              │ ← Error disappears
└─────────────────────────────────┘
```

## Code Implementation

### Validation Functions (script.js, lines 172-227)

#### validateEmail()
Checks if email matches proper format with regex pattern

#### validatePhone()
Checks if phone matches international format with regex pattern

#### showValidationError()
- Adds `input-error` class (red styling)
- Creates/updates error message div
- Displays error text below input

#### clearValidationError()
- Removes `input-error` class (resets styling)
- Hides error message div

#### validateForm()
- Validates both email and phone fields
- Returns true if all fields are valid
- Returns false if any field is invalid

### Real-time Listeners (lines 229-269)
- Email inputs: `blur` event + `input` event for clearing
- Phone inputs: `blur` event + `input` event for clearing

### Form Submission (lines 271+)
- Calls `validateForm()` before submission
- Prevents submission if validation returns false

### CSS Styling (index.html, lines 40-59)

```css
.input-error {
    border-color: #e74c3c !important;        /* Red border */
    background-color: rgba(231, 76, 60, 0.05); /* Light red bg */
}

.error-message {
    color: #e74c3c;                          /* Red text */
    font-size: 12px;
    padding: 4px 8px;
    background-color: rgba(231, 76, 60, 0.1); /* Light red bg */
    border-left: 3px solid #e74c3c;          /* Red accent bar */
    border-radius: 2px;
    font-weight: 500;
}
```

## Testing the Validation

### Test Case 1: Invalid Email
1. Open the form
2. Enter any email without @ (e.g., `johndomain.com`)
3. Click away or try to submit
4. Expected: Red error message appears

### Test Case 2: Valid Email
1. Enter valid email (e.g., `john@company.ae`)
2. Error disappears automatically
3. Form can be submitted

### Test Case 3: Invalid Phone
1. Enter phone with too few digits (e.g., `050 12`)
2. Click away or try to submit
3. Expected: Red error message appears

### Test Case 4: Valid Phone
1. Enter valid phone (e.g., `050 123 4567` or `+971 50 123 4567`)
2. Error disappears automatically
3. Form can be submitted

### Test Case 5: Multiple Errors
1. Enter invalid email and invalid phone
2. Try to submit
3. Expected: Both fields show error messages
4. Cannot submit until both are corrected

## Browser Compatibility
- All modern browsers (Chrome, Firefox, Safari, Edge)
- Uses standard JavaScript APIs (querySelector, addEventListener, classList)
- Works on mobile and desktop

## Security Note
- Client-side validation is for UX only
- Backend should also validate email/phone format
- Never trust client validation alone for security

## Customization

### To modify error messages:
Edit the text in these functions in `script.js`:
- Line 211: Email error message
- Line 221: Phone error message
- Line 238: Blur event email error
- Line 254: Blur event phone error

### To modify validation patterns:
- Line 173: Email regex (change emailRegex)
- Line 178: Phone regex (change phoneRegex)

### To modify error styling:
Edit in `index.html` style section:
- Lines 40-43: `.input-error` class
- Lines 45-53: `.error-message` class
