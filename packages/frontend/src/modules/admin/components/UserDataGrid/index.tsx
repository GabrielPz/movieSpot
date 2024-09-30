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
import { UserData } from "@/services/users";
import { CreateUserForm } from "../ActionModal/ActionModalForms";
import { useCreateUser } from "@/services/users";
import BaseActionModal from "../ActionModal/BaseActionModal";
import DataGrid from "@/components/data-table/DataGrid";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openModal, setOpenModal] = useState({
    createUser: false,
    updateUser: false,
  });

  const { mutate: createUser, isPending: isCreatingUser } = useCreateUser();

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
              <Box>
                <IconButton
                  id={`open_change_status_menu_icon_${row.id}`}
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Update
                    sx={{
                      color: "blue",
                    }}
                  />
                </IconButton>
              </Box>
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
