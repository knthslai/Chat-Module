import { Stack } from '@tamagui/core';
import { ChatMessage } from './ChatMessage';
import { ActivityIndicator, FlatList } from 'react-native';
import { useChatMessages } from '../hooks/useChatMessages';

export const Chat = () => {
  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useChatMessages();

  const handleLoadMore = () => {
    if (hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  };

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Stack gap="$3" flex={1} justifyContent="center">
      <FlatList
        contentContainerStyle={{ gap: 16 }}
        data={data?.pages.flatMap(page => page.messages)}
        renderItem={({ item }) => (
          <ChatMessage message={item} isUser={item.user.id === 'user-1'} />
        )}
        keyExtractor={item => item.id}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={isFetchingNextPage ? <ActivityIndicator /> : null}
      />
    </Stack>
  );
};
