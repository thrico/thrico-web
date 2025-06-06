export const checkValueWishList = async (feed, item) => {
  const newData = await feed.map((set: any) =>
    set.id === item.id ? { ...set, isWishList: !item?.isWishList } : set
  );
  return newData;
};
export const checkValueLikes = async (feed, item) => {
  const newData = await feed.map((set: any) =>
    set.id === item.id
      ? {
          ...set,
          totalReactions: item?.isLiked
            ? item?.totalReactions - 1
            : item?.totalReactions + 1,
          isLiked: !item?.isLiked,
        }
      : set
  );

  return newData;
};
