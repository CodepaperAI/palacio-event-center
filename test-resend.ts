import { handleInquirySubmission } from './server/inquiry';

const testData = {
  name: 'Test User',
  email: 'test@test.com',
  phone: '905-123-4567',
  eventType: 'Wedding',
  guestCount: '150',
  eventDate: '2025-06-15',
  message: 'Testing the inquiry form - please ignore',
  source: 'homepage'
};

const result = await handleInquirySubmission({
  method: 'POST',
  body: testData
});

console.log('Status:', result.status);
console.log('Response:', JSON.stringify(result.body, null, 2));
