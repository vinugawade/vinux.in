import MetaData from "@components/MetaData";
import Image from "next/image";
import Link from "next/link";
import AnimatedDiv from "@components/FramerMotion/AnimatedDiv";
import PageTop from "@components/PageTop";
import pageMeta from "@content/meta";
import { CertificateType } from "@lib/types";
import { getCertificates } from "@lib/supabase";
import CreateAnIssue from "@components/CreateAnIssue";
import { getFormattedDate } from "@utils/date";
import { popUp, opacityVariant } from "@content/FramerMotionVariants";
import { motion } from "framer-motion";

export default function Certificates({
  certificates,
  error,
}: {
  certificates: CertificateType[];
  error: boolean;
}) {
  if (error) return <CreateAnIssue />;

  return (
    <>
      <MetaData
        title={pageMeta.certificates.title}
        description={pageMeta.certificates.description}
        previewImage={pageMeta.certificates.image}
        keywords={pageMeta.certificates.keywords}
      />

      <section className="pageTop">
        <PageTop pageTitle="Certificates">
          I've participated in contests and courses and get certified
          in many skills. You can find the certificates below.
        </PageTop>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 font-inter">
          {certificates.map((cer) => {
            return (
              <AnimatedDiv
                className="flex flex-col items-center justify-between p-3 rounded-lg bg-white shadow dark:bg-darkSecondary/50 transition-all lg:hover:!scale-125 active:!scale-90 hover:z-10 hover:shadow-lg hover:origin-center text-gray-700 hover:text-black dark:text-gray-300/80 dark:hover:text-white hover:border-gray-400"
                variants={opacityVariant}
                key={cer.id}
              >
                <motion.div variants={popUp}>
                  <Link href={cer.url} target="_blank" className="font-semibold no-underline">
                    <div className="items-center justify-center px-4 rounded-lg overflow-hidden text-center relative">
                      <div className="flex items-center justify-center text-center">
                        <Image
                          width={80}
                          height={80}
                          src={cer.orgLogo}
                          alt={cer.orgName}
                          quality={50}
                          placeholder="blur"
                          blurDataURL={cer.orgLogo}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                      <p className="text-2xl text-white-500 py-2">
                        {cer.title}
                      </p>

                      <p className="text-md text-gray-500 py-1">
                        {cer.orgName} &#x2022;{" "}
                        {getFormattedDate(new Date(cer.issuedDate))}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              </AnimatedDiv>
            );
          })}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const {
    certificates,
    error
  } = await getCertificates();
  return {
    props: {
      certificates,
      error,
    },
  };
}
