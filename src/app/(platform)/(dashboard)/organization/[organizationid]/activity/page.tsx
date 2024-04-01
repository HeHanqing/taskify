import { Separator } from "@/components/ui/separator";
import Info from "../_components/info";
import ActivityList from "./_components/activity-list";
import { Suspense } from "react";

const ActivityPage = ({ params }: { params: { organizationid: string } }) => {
  return (
    <div className="w-full">
      <Info />
      <Separator className="my-2" />
      <Suspense fallback={<ActivityList.Skeleton />}>
        <ActivityList organizationId={params.organizationid} />
      </Suspense>
    </div>
  );
};

export default ActivityPage;
