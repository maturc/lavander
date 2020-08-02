import { ReactFragment, RefAttributes, RefObject } from "react"

export type IRegistrationProps = {
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
  setSuccessOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
export type ILoginProps = {
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
  setSignup: React.Dispatch<React.SetStateAction<boolean>>;
}
export type IChatProps = {
  user: IUser;
  socket: SocketIOClient.Socket | undefined;
}
export type ISidebar = {
  user: IUser;
  activeChannel: IChannel;
  setActiveChannel: React.Dispatch<React.SetStateAction<{
    id_channel: number;
    channel_name: string;
  }>>;
  isDrawerHidden: boolean;
  setIsDrawerHidden: React.Dispatch<React.SetStateAction<boolean>>;
  forwardedMsgInputRef: React.RefObject<React.MutableRefObject<HTMLInputElement>>;
}
export type IChannelList = {
  user: IUser,
  activeChannel: IChannel,
  setActiveChannel: React.Dispatch<React.SetStateAction<IChannel>>;
  setIsDrawerHidden: React.Dispatch<React.SetStateAction<boolean>>;
  forwardedMsgInputRef: React.RefObject<React.MutableRefObject<HTMLInputElement>>;
}
export type IMessageInputBox = {
  user: IUser;
  activeChannel: IChannel;
  socket: SocketIOClient.Socket | undefined;
  msgInputRef: React.RefObject<React.MutableRefObject<HTMLInputElement>>;
}
export type IMessageContainer = {
  activeChannel: IChannel;
  socket: any;
}
export type IMessageArea = {
  user: IUser;
  activeChannel: IChannel;
  isDrawerHidden: boolean;
  setIsDrawerHidden: React.Dispatch<React.SetStateAction<boolean>>;
  forwardedMsgInputRef: React.RefObject<React.MutableRefObject<HTMLInputElement>>;
  socket: any;
}
export type IMessageComponent = {
  message: IMessage;
  embeds: RegExpMatchArray | null;
}

export type IUser = {
  id_user: number,
  username: string,
  avatar: string
}
export type IChannel = {
  id_channel: number;
  channel_name: string;
}

export type IMessage = {
​  avatar: string;
  id_user: number;
​​  message: string;
​​  time: string;
​​  username: string;
}
export type ISocket = IMessage & { id_channel: number }
/* type ISetActiveChannel = React.Dispatch<React.SetStateAction<{
  id_channel: number;
  channel_name: string;
}>>
 */
