import { UserActitivityLogsCreateDTO } from "../dtos/UserActitivityLogsCreateDTO";
import { UserActitivityLogsDTO } from "../dtos/UserActitivityLogsDTO";
import type { UserActivityLogs } from "../entities/UserActivityLogs";

export class UserActivityLogsMapper{
  static toDTO(userActivityLogs:UserActivityLogs): UserActitivityLogsDTO{
    return new UserActitivityLogsDTO(userActivityLogs.id,
      userActivityLogs.dataAcao,
      userActivityLogs.origemVisualizacao
    );
  }

  static toEntity(userActivityLogs:UserActivityLogs): UserActitivityLogsCreateDTO{
    return new UserActitivityLogsCreateDTO(userActivityLogs.dataAcao, 
      userActivityLogs.origemVisualizacao)
  }
}