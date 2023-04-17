import { Suspense } from "react";
import Counter from "./Counter";
import UserList from "./userList";
import PostList from "./postList";

const Test = () => {
  return (
    <>
      <h1 className="text-xl font-bold">Testページ</h1>
      <Counter />
      <Suspense fallback={<p>User list: ...Loading</p>}>
        {/* @ts-expect-error Server Component */}
        <UserList />
      </Suspense>
      <Suspense fallback={<p>Post list: ...Loading</p>}>
        {/* @ts-expect-error Server Component */}
        <PostList />
      </Suspense>
    </>
  );
};

export default Test;
