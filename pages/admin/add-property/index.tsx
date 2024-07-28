import { Hero } from "@/components/hero";

export default function AddProperty() {
  // const { user } = useAuth();
  // const { data, error, isLoading } = useGetUser(user?.id);

  // if (isLoading) {
  //     return <Loading />;
  // }

  // if (error) {
  //     return <ErrorPage statusCode={error.status} />;
  // }

  return (
    <>
      <Hero
        title="Add New Property"
        subtitle="Add a new property"
        image="/hero-1.webp"
      />

      <div className="container mx-auto px-4 mt-12">
        <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="input"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
