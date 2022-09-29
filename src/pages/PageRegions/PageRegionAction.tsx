import { Navigate, useMatch } from '@tanstack/react-location'

export const PageRegionAction: React.FC = () => {
  const {
    data: { region },
    params: { regionPath },
  } = useMatch()

  if (region === undefined) {
    return <Navigate to="/regionen" search={{ notFound: regionPath }} />
  }

  return (
    <h1>
      ACTION {regionPath}: {JSON.stringify(region)}
    </h1>
  )
}
