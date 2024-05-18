import { SignIn } from "@clerk/nextjs"

export default function Page() {
  console.log("Page")
  return (
    <div className="flex justify-center py-24">
      <SignIn path="/:locale/sign-in" afterSignInUrl="/:locale" />
    </div>
  )
}
