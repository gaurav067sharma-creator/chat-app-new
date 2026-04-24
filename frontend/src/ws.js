import { io } from 'socket.io-client';

export function connectWS() {
    return io('https://symmetrical-memory-wv79p7494wgg2g94w-4600.app.github.dev/');
}
