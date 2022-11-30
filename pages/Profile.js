import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export default function Profile() {
    return (
        <div>
            <h1>Protected Page</h1>
        </div>
    )
}

export const getServerSideProps = async (ctx) => {
  // Create authenticated Supabase Client

  const supabase = createServerSupabaseClient(ctx);

  // Check if we have a session

  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
    },
  };
};
