import { DrawerItem } from "@/entities/drawer-itens";
import ChecklistIcon from '@mui/icons-material/Checklist';
import TypeSpecimenIcon from '@mui/icons-material/TypeSpecimen';
import PeopleIcon from '@mui/icons-material/People';
import PublicIcon from '@mui/icons-material/Public';
import LogoutIcon from '@mui/icons-material/Logout';

export const drawerItens: DrawerItem[] =
[
    {
        icon: PeopleIcon,
        key: 'user',
        label: 'Users',
        route: '/users'
    },
    {
        icon: ChecklistIcon,
        key: 'project',
        label: 'Projects',
        route: '/projects'
    },
    {
        icon: PublicIcon,
        key: 'platform',
        label: 'Platforms',
        route: '/platforms'
    },
    {
        icon: TypeSpecimenIcon,
        key: 'profile',
        label: 'Profiles',
        route: '/profiles'
    },
    {
        icon: LogoutIcon,
        key: 'logout',
        label: 'Logout',
        route: '/login'
    },
]

export const mockedLabel = ['id', 'name'];
export const mockedData = [
    {
        id: '1',
        name: '1'
    },
    {
        id: '2',
        name: '2'
    }
]

// export const ProjectsTableLabel = [
//     {
//         key: "name",
//         label: "Name",
//     },
//     {
//         key: "send_to_trackdechets",
//         label: "Send to Trackdechets",
//     },
//     {
//         key: "send_to_rndts",
//         label: "Send to RNDTS",
//     },
//     {
//         key: "projectId",
//         label: "Project ID",
//     },
// ]
// export const ProfilesTableLabel = [
//     {
//         key: "name",
//         label: "Name",
//     },
//     {
//         key: "profileId",
//         label: "Profile ID",
//     },
//     {
//         key: "subschemes",
//         label: "Subschemes",
//     }
// ]

// export const PlatformsTableLabel = [
//     {
//         key: "name",
//         label: "Name",
//     },
//     {
//         key: "platformId",
//         label: "ID",
//     },
//     {
//         key: "profileTypesIDs",
//         label: "Profiles",
//     },
//     {
//         key: "projects",
//         label: "Name",
//     },
// ]

// export const UsersTableLabel = [
//     {
//         key: "username",
//         label: "Name",
//     },
//     {
//         key: "platformId",
//         label: "PLatform ID",
//     }
// ]
// OBS Gabriel Henrique
// O projeto está estruturado de uma maneira que caso você queira adiciopnar campos na tabela basta adicionar sua label aqui
// é importante lembrar que a label precisa ser o nome da chave que você quer do objeto