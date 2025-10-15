export const certificates = [
  // Users can drop PNG files into public/certificates and reference them here
  // Example entry:
  // { file: '/certificates/my-cert.png', title: 'Course Name', issuer: 'Issuing Org', date: '2024-05' }
  // Add your SSoC certificate here (place the PNG in public/certificates/ssoc-piyush.png)
  {
    file: '/certificates/ssoc-piyush.png',
    title: 'SSoC Certificate',
    issuer: 'Summer of Code (SSoC)',
    date: '2025-10-10',
  },
  {
    file: '/certificates/example-certificate-1.png',
    title: 'Example Certificate 1',
    issuer: 'Example Issuer',
    date: '2024-01-01',
  },
  {
    file: '/certificates/example-certificate-2.png',
    title: 'Example Certificate 2',
    issuer: 'Example Issuer',
    date: '2023-08-01',
  },
  // SSoC certificate provided by the user (place the PNG in public/certificates/ssoc-certificate.png)
  {
    file: '/certificates/ssoc-certificate.png',
    title: 'SSoC Participation Certificate',
    issuer: 'SSoC',
    date: '2025-10-10',
  },
];

export default {
  certificates,
};