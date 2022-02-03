export const environment = {
  production: true,
  api: {
    login: {
      url: 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword',
      key: 'AIzaSyB-p8CKoaQr097NJ8YJRpoWpezJj5xRRUI'
    },
    savingAccounts: {
      url: 'https://mibanco-333616-default-rtdb.firebaseio.com/cuentaAhorro/OcBMnUGvAqVlUOskPph6ZIDpDqj2.json',
      auth: 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImMxMGM5MGJhNGMzNjYzNTE2ZTA3MDdkMGU5YTg5NDgxMDYyODUxNTgiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vbWliYW5jby0zMzM2MTYiLCJhdWQiOiJtaWJhbmNvLTMzMzYxNiIsImF1dGhfdGltZSI6MTY0MzkyMTc5OSwidXNlcl9pZCI6Ik9jQk1uVUd2QXFWbFVPc2tQcGg2WklEcERxajIiLCJzdWIiOiJPY0JNblVHdkFxVmxVT3NrUHBoNlpJRHBEcWoyIiwiaWF0IjoxNjQzOTIxNzk5LCJleHAiOjE2NDM5MjUzOTksImVtYWlsIjoiZGVzYXJyb2xsb0BwcnVlYmEuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImRlc2Fycm9sbG9AcHJ1ZWJhLmNvbSJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.eIBkNmwOVQn6DDKL7Q7G6QBUlfBXPK6RMitspVw2n_x0v4FJVFMt-qYjY2Q0yiNSYHmZZxFcDhmv7CvCJBrVlWWE1X3mI6MQARpv7RA-aNoCIoyQXPHsMzlh_V-sXHvyUFoHH-7-llZkX0YWiUYopyzNt5cm637mcetfkQkJN7GfNYTGai0nA6-OXMB-RwNySfn8crufGHivtVZJNEsMyROcBusTTXsqsjz_T475CpD1sG0NKVzmxpS7239oi28E7niThBa7vDON1roGZiOH8XBGTg_3guzQA-rj6XwTRwdIza22EyiFW8S5i3JmN17U5MXIW0U_pnV9Jv3SEq64dg'
    },
    customers: 'https://us-central1-servicios-funerarios-sama.cloudfunctions.net/customers',
  }
};
