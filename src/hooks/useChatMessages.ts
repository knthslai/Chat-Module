import { useInfiniteQuery } from '@tanstack/react-query';

export interface ChatUser {
  id: string;
  name: string;
  avatar?: string;
}

export interface ChatMessage {
  id: string;
  content: string;
  timestamp: Date;
  userId: string;
  user: ChatUser;
}

export interface ChatMessagesResponse {
  messages: ChatMessage[];
  hasNextPage: boolean;
  nextCursor?: string;
}

const MOCK_USERS: ChatUser[] = [
  {
    id: 'user-1',
    name: 'Alice Johnson',
    avatar: 'https://i.pravatar.cc/150?img=1',
  },
  {
    id: 'user-2',
    name: 'Bob Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
  },
  {
    id: 'user-3',
    name: 'Carol Davis',
    avatar: 'https://i.pravatar.cc/150?img=3',
  },
  {
    id: 'user-4',
    name: 'David Wilson',
    avatar: 'https://i.pravatar.cc/150?img=4',
  },
];

const LOREM_SEGMENTS = [
  'Lorem ipsum dolor sit amet.',
  'Consectetur adipiscing elit.',
  'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.',
  'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
];

const generateMockMessagePool = (
  totalMessages: number = 1000
): ChatMessage[] => {
  const messages: ChatMessage[] = [];
  const now = Date.now();

  for (let i = 0; i < totalMessages; i++) {
    const user = MOCK_USERS[i % MOCK_USERS.length];
    const timestamp = new Date(now - i * 60000);

    const messageSize = (i % 5) + 1;
    const selectedSegments = LOREM_SEGMENTS.slice(0, messageSize);
    const content = selectedSegments.join(' ');

    messages.push({
      id: `msg-${String(i).padStart(4, '0')}`,
      content,
      timestamp,
      userId: user.id,
      user,
    });
  }

  return messages;
};

const MESSAGE_POOL = generateMockMessagePool();

const fetchChatMessages = async ({
  pageParam,
}: {
  pageParam?: string;
}): Promise<ChatMessagesResponse> => {
  await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));

  const pageSize = 20;
  let startIndex = 0;

  if (pageParam) {
    const cursorIndex = MESSAGE_POOL.findIndex(msg => msg.id === pageParam);
    if (cursorIndex !== -1) {
      startIndex = cursorIndex + 1;
    }
  }

  const endIndex = Math.min(startIndex + pageSize, MESSAGE_POOL.length);
  const messages = MESSAGE_POOL.slice(startIndex, endIndex);

  const hasNextPage = endIndex < MESSAGE_POOL.length;
  const nextCursor = hasNextPage
    ? messages[messages.length - 1]?.id
    : undefined;

  return {
    messages,
    hasNextPage,
    nextCursor,
  };
};

export const useChatMessages = () => {
  return useInfiniteQuery({
    queryKey: ['chat-messages'],
    queryFn: fetchChatMessages,
    initialPageParam: undefined as string | undefined,
    getNextPageParam: lastPage => lastPage.nextCursor,
  });
};
