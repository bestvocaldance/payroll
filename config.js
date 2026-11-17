// 선생님 정산 화면 설정
// apiUrl: 빠른 서버(Supabase Edge Function) 주소
// anonKey: Supabase 공개용(anon) 키 — 브라우저에 두어도 되는 공개 키입니다. 데이터는 서버만 읽고 쓸 수 있습니다.
// ※ 되돌리기: apiUrl 을 아래 '예전 주소'로 바꾸고 anonKey 줄을 지우면 예전 서버로 돌아갑니다.
//   예전 주소: https://script.google.com/macros/s/AKfycbzSmlOvmSZw5UojcvhIMaDxY_woXML6oey3QI2aQxxPPhR7kcYn8l_WQVsg6yANcMq9/exec
window.PAYROLL_CONFIG = {
  apiUrl: "https://vchztldfletlvrvhsgtv.supabase.co/functions/v1/payroll-fast",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZjaHp0bGRmbGV0bHZydmhzZ3R2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM3ODU0MzIsImV4cCI6MjEwOTM2MTQzMn0.psF30JqpjQtRFsQJrZwm_alY6AlnT78U0vZBdBk6HfY"
};
