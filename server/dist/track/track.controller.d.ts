import { ObjectId } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CreateTrackDto } from './dto/create-track.dto';
import { TrackService } from './track.service';
export declare class TrackController {
    private trackService;
    constructor(trackService: TrackService);
    create(files: any, dto: CreateTrackDto): Promise<import("./schema/track.schema").Track>;
    getAll(count: number, offset: number): Promise<import("./schema/track.schema").Track[]>;
    search(query: string): Promise<import("./schema/track.schema").Track[]>;
    getOne(id: ObjectId): Promise<import("./schema/track.schema").Track>;
    delete(id: ObjectId): Promise<import("mongoose").Schema.Types.ObjectId>;
    addComment(dto: CreateCommentDto): Promise<import("./schema/comment.schema").Comment>;
    listen(id: ObjectId): Promise<void>;
}
