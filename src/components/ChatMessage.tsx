import React from 'react';
import { Stack, Text } from '@tamagui/core';
import { Image } from '@tamagui/image';

import { ChatMessage as ChatMessageType } from '../hooks/useChatMessages';

interface ChatMessageProps {
  message: ChatMessageType;
  isUser: boolean;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  isUser,
}) => (
  <Stack flexDirection={isUser ? 'row-reverse' : 'row'}>
    <Stack flex={1} gap="$2">
      <Stack flexDirection={isUser ? 'row-reverse' : 'row'} gap="$2">
        <Stack height="$4" marginTop="$6">
          {message.user.avatar ? (
            <Stack asChild>
              <Image
                source={{ width: 200, height: 200, uri: message.user.avatar }}
                width="$3"
                height="$3"
                borderRadius="$8"
              />
            </Stack>
          ) : (
            <Text fontSize="$3" color="$gray11">
              {message.user.name.charAt(0).toUpperCase()}
            </Text>
          )}
        </Stack>
        <Stack flex={1} maxWidth="75%" gap="$2">
          <Stack
            flexDirection="column"
            alignItems={isUser ? 'flex-end' : 'flex-start'}
          >
            <Text fontSize="$4" fontWeight="600" color="$color">
              {message.user.name}
            </Text>
          </Stack>
          <Stack padding="$3" backgroundColor="$color1" borderRadius="$6">
            <Text
              fontSize="$4"
              color="$color11"
              lineHeight="$4"
              textAlign={isUser ? 'right' : 'left'}
              flexWrap="wrap"
            >
              {message.content}
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  </Stack>
);
