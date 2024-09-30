import {
  Box,
  CircularProgress,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  MoreVertOutlined,
  CheckOutlined,
  CloseSharp,
  RestartAltSharp,
  Update,
} from "@mui/icons-material";
import { useState } from "react";
import { toast } from "react-toastify";
import { useDeleteUser, UserData } from "@/services/users";
import {
  CreateUserForm,
  DeleteUserForm,
} from "../ActionModal/ActionModalForms";
import { useCreateUser } from "@/services/users";
import BaseActionModal from "../ActionModal/BaseActionModal";
import DataGrid from "@/components/data-table/DataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import DeleteIcon from "@mui/icons-material/Delete";

interface UsersTableProps {
  users: UserData[];
  isLoading?: boolean;
  refetch: () => void;
}
export const UsersTable = ({
  users,
  isLoading = false,
  refetch,
}: UsersTableProps) => {
  const [openModal, setOpenModal] = useState({
    createUser: false,
    updateUser: false,
    deleteUser: false,
  });
  const [selectedUser, setSelectedUser] = useState<UserData | null>(null);
  const { mutate: createUser, isPending: isCreatingUser } = useCreateUser();
  const { mutate: updateUser, isPending: isUpdatingUser } = useCreateUser();
  const { mutate: deleteUser, isPending: isDeletingUser } = useDeleteUser();

  const handleOpenModal = (modal: string) => {
    setOpenModal({
      ...openModal,
      [modal]: true,
    });
  };

  const handleCloseModal = (modal: string) => {
    setOpenModal({
      ...openModal,
      [modal]: false,
    });
  };

  const handleCreateUser = (data: UserData) => {
    createUser(
      {
        body: data,
      },
      {
        onError: (error) => {
          toast.error(error?.message || "Erro ao criar usuário");
        },
        onSuccess: () => {
          refetch();
          toast.success("Usuário criado com sucesso");
          handleCloseModal("createUser");
        },
      }
    );
  };

  const handleDeleteUser = () => {
    deleteUser(
      {
        id: selectedUser?.id || "",
      },
      {
        onError: (error) => {
          toast.error(error?.message || "Erro ao deletar usuário");
        },
        onSuccess: () => {
          toast.success("Usuário deletado com sucesso");
          refetch();
          handleCloseModal("deleteUser");
        },
      }
    );
  };

  return (
    <>
      <BaseActionModal
        title="Criar usuário"
        body={
          <CreateUserForm
            onSubmit={handleCreateUser}
            isLoading={isCreatingUser}
            onClose={() => {
              handleCloseModal("createUser");
            }}
          />
        }
        open={openModal.createUser}
        handleClose={() => {
          handleCloseModal("createUser");
        }}
        handleConfirm={() => console.log("confirm")}
      />
      <BaseActionModal
        title="Deletar usuário"
        sx={{
          height: "auto",
        }}
        body={
          <DeleteUserForm
            onSubmit={handleDeleteUser}
            isLoading={isDeletingUser}
            onClose={() => {
              handleCloseModal("deleteUser");
            }}
          />
        }
        open={openModal.deleteUser}
        handleClose={() => {
          handleCloseModal("deleteUser");
        }}
        handleConfirm={() => console.log("confirm")}
      />

      <DataGrid
        title="Lista de Usuários"
        ActionButton={
          <Tooltip title="Adicionar usuário" arrow>
            <IconButton
              onClick={() => handleOpenModal("createUser")}
              sx={{
                color: "secondary.main",
              }}
            >
              <AddCircleOutlineIcon fontSize="large" />
            </IconButton>
          </Tooltip>
        }
        sx={{
          minWidth: "800px",
        }}
        columns={[
          {
            headerName: "Email",
            field: "email",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: UserData }) => {
              return row.email;
            },
          },
          {
            headerName: "Nome",
            field: "name",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: UserData }) => {
              return row.name;
            },
          },
          {
            headerName: "CPF",
            field: "cpf",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: UserData }) => {
              return row.cpf;
            },
          },
          {
            headerName: "Telefone",
            field: "phone",
            flex: 1,
            minWidth: 200,
            renderCell: ({ row }: { row: UserData }) => {
              return row.phone;
            },
          },
          {
            field: "action",
            headerName: "",
            sortable: false,
            disableColumnMenu: true,
            width: 120,
            align: "left",
            renderCell: ({ row }: { row: UserData }) => (
              <>
                <IconButton id={`update_icon_${row.id}`}>
                  <ModeEditOutlineIcon
                    sx={{
                      color: "blue",
                    }}
                  />
                </IconButton>
                <IconButton
                  id={`delete_icon_${row.id}`}
                  onClick={() => {
                    setSelectedUser(row);
                    handleOpenModal("deleteUser");
                  }}
                >
                  <DeleteIcon
                    sx={{
                      color: "secondary.main",
                    }}
                  />
                </IconButton>
              </>
            ),
          },
        ]}
        slots={{
          loadingOverlay: () => (
            <Box display="flex" alignItems="center" justifyContent="center">
              <CircularProgress />
            </Box>
          ),
        }}
        rows={users || []}
        pageSizeOptions={[5, 10, 25]}
        loading={isLoading}
      />
    </>
  );
};
