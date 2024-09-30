"use client";

import { Box, Card, Modal, Skeleton, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useCallback, useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useGetAllUsers } from "@/services/users";
import { useTranslate } from "@/hooks/use-translate";
import { UsersTable } from "../../components/UserDataGrid";

export function Users() {
  const theme = useTheme();
  const [pageNum, setPageNum] = useState("1");
  const [selectedIdToUpdate, setSelectedIdToUpdate] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [userData, setUserData] = useState<any>({});
  const handlePagechange = (newPage: string) => {
    setPageNum(newPage);
  };
  const handleSelectedRowToUpdate = (id: string, data: any) => {
    setSelectedIdToUpdate(id);
    setUserData(data);
    setIsUpdate(true);
    setOpen(true);
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setIsUpdate(false);
    setSelectedIdToUpdate("");
  };

  const {
    data: users,
    isSuccess,
    isLoading: isLoadingUsers,
    refetch,
  } = useGetAllUsers({
    requestParams: {},
  });

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      {isSuccess && users.length > 0 ? (
        <Card
          elevation={5}
          sx={{
            position: "absolute",
            padding: 3,
          }}
        >
          <UsersTable
            refetch={refetch}
            users={users}
            isLoading={isLoadingUsers}
          />
        </Card>
      ) : (
        <Skeleton sx={{ width: "80%", height: "50%" }} />
      )}
    </Box>
  );
}
