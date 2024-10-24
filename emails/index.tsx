import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text
} from "@react-email/components";

interface WaitlistEmailProps {
  email: string;
}

export const Waitlist = ({ email }: WaitlistEmailProps) => {
  const previewText = `Thanks for joining the BlueOS waitlist ${email}`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`https://useblueos.com/Logo.png`}
                width="40"
                height="37"
                alt="Blueos logo"
                className="my-0 mx-auto"
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Thanks for joining <strong>BlueOS</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello {email},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Thanks for joining the waitlist for our new client portal &
              project management woftware! I'm Edgar, the developer behind this
              project, really happy to have you on board.
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              I'll keep you posted on the progress and notify you as soon as the
              private beta is ready. In the meantime, if you have any questions
              or feedback, don't hesitate to reach out by replying directly to{" "}
              <a href="mailto:edgar@useblueos.com">this email {""}</a>— I'm here
              to listen!
            </Text>
            <Text>
              Best regards,
              <br />
              Edgar
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              You received this email because you signed up for the BlueOS
              waitlist. If you believe this is a mistake, feel free to ignore
              this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

Waitlist.PreviewProps = {
  email: "edgar@useblueos.com"
} as WaitlistEmailProps;

export default Waitlist;
