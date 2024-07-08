import { ErrorToast } from '../../components/ui/err'
import StartScreen from './(log-in)/page'

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex items-center justify-center  m-auto bg-transparent  border   lg:min-h-[600px]  xl:min-h-[800px]">
      {/* <DisableContextMenu /> */}
      <ErrorToast />
      <video
        preload="true"
        autoPlay
        loop
        controls={false} // Disables default controls
        muted
        className="absolute inset-0 size-full object-cover"
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>
      <StartScreen /> <div className=" z-10"></div>
    </div>
  )
}
