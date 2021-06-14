import { notificationTypes } from "src/assets/notificationTypes.enum";

export interface Notif{
    img : string;
    text : string;
    timestamp : Date;
    notificationType : notificationTypes;
    read : boolean;
}