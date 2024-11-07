import CustomersTable from "@/app/ui/customers/table";
import { Metadata } from "next";
import { Suspense } from "react";

// Define the expected type for props, assuming that searchParams is asynchronous
interface CustomersPageProps {
  searchParams?:
    | Promise<{
        query?: string;
      }>
    | undefined;
}

export const metadata: Metadata = {
  title: "Customers",
};

export default async function CustomersPage({
  searchParams,
}: CustomersPageProps) {
  // Ensure that the searchParams resolves if it's a Promise
  const resolvedSearchParams = await searchParams;
  const query = resolvedSearchParams?.query || "";

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CustomersTable query={query} />
    </Suspense>
  );
}
