import { AuthProvider } from "./context/AuthContext";
import { ChatProvider } from "./context/chat/ChatReducer";
import { SocketProvider } from "./context/SocketContext";

import { AppRouter } from "./router/AppRouter";

function ChatApp() {
  return (
    <AuthProvider>
      <SocketProvider>
        <ChatProvider>
          <AppRouter />
        </ChatProvider>
      </SocketProvider>
    </AuthProvider>
  );
}

export default ChatApp;
