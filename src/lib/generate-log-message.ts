import { ACTION, AuditLog } from "@prisma/client";

export const generateLogMessage = (log: AuditLog) => {
  const { action, entityTitle, entityType } = log;

  switch (action) {
    case ACTION.CREATE:
      return `created ${entityType} "${entityTitle}"`;
    case ACTION.UPDATE:
      return `updated ${entityType} "${entityTitle}"`;
    case ACTION.DELETE:
      return `deleted ${entityType} "${entityTitle}"`;
    default:
      return `Unknown action ${action}`;
  }
};
