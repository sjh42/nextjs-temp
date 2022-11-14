import { Button, Loading } from "@nextui-org/react";

export default function Page() {
  return (
    <>
      <Button.Group>
        <Button>
          <Loading color="white" size="sm" />
        </Button>
        <Button>
          <Loading type="spinner" color="white" size="sm" />
        </Button>
        <Button>
          <Loading type="points" color="white" size="sm" />
        </Button>
      </Button.Group>
    </>
  )
}
