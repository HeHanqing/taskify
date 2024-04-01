import { db } from "@/lib/db";
import Info from "./_components/info";
import { useOrganization } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import BoardList from "./_components/board-list";
import { Suspense } from "react";

const OrganizationIdPage = ({
  params,
}: {
  params: { organizationid: string };
}) => {
  return (
    <div className="w-full mb-20">
      <Info />
      <Separator className="my-4" />
      <div className="px-2 md:px-4">
        <Suspense fallback={<BoardList.Skeleton />}>
          <BoardList organizationid={params.organizationid} />
        </Suspense>
      </div>
    </div>
  );
};

export default OrganizationIdPage;
