import ActivityItem from "@/components/activity-item";
import { Skeleton } from "@/components/ui/skeleton";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

interface ActivityListProps {
  organizationId: string;
}

const ActivityList = async ({ organizationId }: ActivityListProps) => {
  const { orgId } = auth();

  if (!orgId) {
    redirect("/select-org");
  }

  const auditLogs = await db.auditLog.findMany({
    where: {
      orgId: organizationId,
    },
    orderBy: {
      createAt: "desc",
    },
  });

  return (
    <ol className="space-y-4 mt-4">
      <p className="hidden last:block text-xs text-center text-muted-foreground">
        No activity found inside this orgnization
      </p>
      {auditLogs.map((log) => (
        <ActivityItem key={log.id} data={log} />
      ))}
    </ol>
  );
};

ActivityList.Skeleton = function ActivityListSkeleton() {
  return (
    <ol className="space-y-4 mt-4">
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[50%] h-14" />
      <Skeleton className="w-[70%] h-14" />
      <Skeleton className="w-[80%] h-14" />
      <Skeleton className="w-[75%] h-14" />
    </ol>
  );
};

export default ActivityList;
