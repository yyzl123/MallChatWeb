import type { UserItem } from '@/services/types'

export const uniqueUserList = (arr: UserItem[]) => {
  return (<any>Object).values((<any>Object).fromEntries(arr.map((item) => [item.uid, item])))
}
