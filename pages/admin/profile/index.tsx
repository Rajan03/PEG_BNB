export default function Profile() {
  // const { user } = useAuth();
  // const { data, error, isLoading } = useGetUser(user?.id);

  // if (isLoading) {
  //     return <Loading />;
  // }

  // if (error) {
  //     return <ErrorPage statusCode={error.status} />;
  // }

  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="text-2xl font-semibold">My Profile</h1>
    </div>
  );
}
