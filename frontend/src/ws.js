import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://animated-eureka-4q7g57rgr4x7f75j6-4600.app.github.dev/');
}
