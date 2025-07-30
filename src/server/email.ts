import {
  ChangeEmailVerificationTemplate,
  ResetPasswordEmailTemplate,
  VerificationEmailTemplate,
} from "@/email-templates";

import { Resend, type CreateEmailResponse } from "resend";
import { env } from "@/env";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const resend = new Resend(env.RESEND_API_KEY as string);

export const sendVerificationEmail = async ({
  email,
  verificationUrl,
}: {
  email: string;
  verificationUrl: string;
}): Promise<CreateEmailResponse> => {
  return await resend.emails.send({
    from: env.EMAIL_FROM as string,
    to: [email],
    subject: "Verify your Email address",
    react: VerificationEmailTemplate({ inviteLink: verificationUrl }),
  });
};

export const sendResetPasswordEmail = async ({
  email,
  verificationUrl,
}: {
  email: string;
  verificationUrl: string;
}): Promise<CreateEmailResponse> => {
  return await resend.emails.send({
    from: env.EMAIL_FROM as string,
    to: [email],
    subject: "Reset Password Link",
    react: ResetPasswordEmailTemplate({ inviteLink: verificationUrl }),
  });
};

export const sendChangeEmailVerification = async ({
  email,
  verificationUrl,
}: {
  email: string;
  verificationUrl: string;
}): Promise<CreateEmailResponse> => {
  return await resend.emails.send({
    from: env.EMAIL_FROM as string,
    to: [email],
    subject: "Reset Password Link",
    react: ChangeEmailVerificationTemplate({ inviteLink: verificationUrl }),
  });
};
