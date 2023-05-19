import * as Tone from "tone"
import { useEffect } from "react"

export default function Home() {

  useEffect(() => {
    const synth = new Tone.Synth().toDestination()

    function handleKeyPress(event: { keyCode: number }) {
      if (event.keyCode === 13) {
        synth.triggerAttackRelease("G4", "8n")
      }
      synth.triggerAttackRelease("G4", "8n")
    }

    document.addEventListener('keypress', handleKeyPress)

    return () => {
      document.removeEventListener('keypress', handleKeyPress)
    }
  }, [])

  return (
    <main
      className={``}
    >
    </main>
  )
}