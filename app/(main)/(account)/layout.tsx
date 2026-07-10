import Profile from "./Profile";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return <div className="flex">
    <Profile />
    {children}
  </div>
}