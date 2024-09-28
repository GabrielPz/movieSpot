import { Platform, Profile, Project } from "@/openapi-services/cyclop";
import { AxiosError } from "axios";

export interface AuthResponseDTO {
    data: AuthResponseData
}

export interface UserDTO {
    username: string;
}

interface AuthResponseData {
    token: string;
    issued: string;
    expires: string;
}

type RawError = {
    RequestId: string;
    status: number;
    error: string;
};

export interface PlatformData extends Platform{
    platformId: string;
}

export interface ProfileData extends Profile{
    profileId: string;
}

export interface ProjectData extends Project{
    projectId: string;
}

export interface SubschemeData {
    name: string;
    subschemeId: string;
}

export type ApiError = AxiosError<RawError>;
