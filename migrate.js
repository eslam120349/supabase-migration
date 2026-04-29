import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  "SUPABASE_URL",
  "SERVICE_ROLE_KEY"
)

const users = [
  { email: "mahmoudsameh280@gmail.com", full_name: "Mahmoud" },
  { email: "e.faras12@gmail.com", full_name: "Mr/Eslam" },
  { email: "shaban.kotb.1971@gmail.com", full_name: "Mrshaban" }
]

for (const user of users) {
  const { data, error } = await supabase.auth.admin.createUser({
    email: user.email,
    password: "12345678",
    email_confirm: true,
    user_metadata: {
      full_name: user.full_name
    }
  })

  console.log("Created:", user.email)
}
