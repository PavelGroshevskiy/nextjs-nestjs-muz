import { ObjectId } from "mongoose";
export declare class CreateCommentDto {
    readonly text: string;
    readonly trackId: ObjectId;
    readonly username: string;
}
