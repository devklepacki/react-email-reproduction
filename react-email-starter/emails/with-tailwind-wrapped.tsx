import { Body, Container, Heading, Html, Tailwind, Text } from "@react-email/components";

export const WithTailwindWrapped = () => {
  return (
    <Html>

      <Tailwind>
        <Body>
          <Container>

            <Heading>
              Heading not visible as well
            </Heading>

            <Text>
              The text is visible, but the heading above is not
            </Text>

          </Container>
        </Body>
      </Tailwind>

    </Html>
  )
}

export default WithTailwindWrapped
