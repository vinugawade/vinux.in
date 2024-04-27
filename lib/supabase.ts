import { createClient } from "@supabase/supabase-js";
import { CertificateType } from "@lib/types";

// A Supabase client object for making requests to a Supabase server.
export const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!
);

/**
 * Asynchronously fetches all projects from the database where the 'pinned' column is set to true.
 * The results are sorted by the 'created_at' column in descending order.
 */
export async function getProjects() {
  let { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .eq("pinned", "true")
    .order("created_at", { ascending: false });

  return {
    projects,
    error: error !== null,
  };
}

/**
 * Asynchronously fetches all certificates from the database where the 'pinned' column is set to true.
 * The results are sorted by the 'created_at' column in descending order.
 */
export async function getCertificates() {
  const certificates: CertificateType[] = [
    {
      id : "1",
      pinned : true,
      title : "Complete PHP Crash Course",
      issuedDate : "4 Dec, 2021",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-a10e1367-b162-4806-bd29-df6665ac1c44"
    },
    {
      id : "2",
      pinned : true,
      title : "SQL- Introduction to SQL programming",
      issuedDate : "20 Mar, 2021",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-e629ca3b-a179-4400-b82e-ca2baf327e7c"
    },
    {
      id : "3",
      pinned : true,
      title : "Practical Git: for Absolute Beginners",
      issuedDate : "11 Sept, 2021",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-db4d19be-5099-4844-8a15-b45cc014b257"
    },
    {
      id : "4",
      pinned : true,
      title : "Applied Linux CLI and Shell Scripting",
      issuedDate : "7 Apr, 2021",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-408317cd-bc01-4a83-ab05-1924f770abf4"
    },
    {
      id : "5",
      pinned : true,
      title : "Complete JAVASCRIPT with HTML5,CSS3",
      issuedDate : "30 Mar, 2021",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-e5cd069b-a56d-4782-9bc0-2b5a8de26e66"
    },
    {
      id : "6",
      pinned : true,
      title : "Linux Command Line Terminal Basic",
      issuedDate : "16 Mar, 2022",
      orgName : "Udemy",
      orgLogo : "https://s.udemycdn.com/meta/default-meta-image-v2.png",
      url : "https://www.udemy.com/certificate/UC-956004af-48d8-4c31-b8e7-5c3d8be24628"
    },
    {
      id : "7",
      pinned : true,
      title : "Microsoft Certified HTML, CSS & Bootstrap",
      issuedDate : "01 July, 2022",
      orgName : "DevTown",
      orgLogo : "https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png",
      url : "https://cert.devtown.in/verify/Z6BuLj"
    },
    {
      id : "7",
      pinned : true,
      title : "Google Certified HTML, CSS and Bootstrap Bootcamp",
      issuedDate : "01 July, 2022",
      orgName : "DevTown",
      orgLogo : "https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png",
      url : "https://cert.devtown.in/verify/ZpdjXe"
    },
    {
      id : "8",
      pinned : true,
      title : "HTML, CSS and Bootstrap Bootcamp",
      issuedDate : "01 July, 2022",
      orgName : "DevTown",
      orgLogo : "https://assets-global.website-files.com/6077f96cf4fa19216396daaf/63f36981950c481a7701e95f_logo-p-500.png",
      url : "https://cert.devtown.in/verify/DlwGJ"
    },
  ];

  return {
    certificates,
    error: certificates.length === 0 || certificates === null,
  };
}


/**
 * This function is used to add a view to the specified blog post. It first retrieves the blog post from the database
 * by its slug value. If the post exists, it increments the view count by 1 and updates it in the database.
 * If the post does not exist, it creates a new record with the slug and views set to 1.
 */
export async function addView(slug: string) {
  try {
    const blogSlug = await getViewBySlug(slug);

    if (blogSlug !== undefined) {
      return await supabase
        .from("views")
        .update({ views: blogSlug.views + 1 })
        .eq("slug", slug);
    } else {
      return await supabase.from("views").insert({
        slug: slug,
        views: 1,
      });
    }
  } catch (err) {
    console.error(err);
  }
}

/**
 * This function is used to retrieve the view count of a specified blog post by its slug value.
 * It queries the database and selects the "views" field for the record with a matching "slug" value.
 */
export async function getViewBySlug(slug: string) {
  try {
    const { data } = await supabase
      .from("views")
      .select("views")
      .eq("slug", slug);
    return data![0];
  } catch (error) {
    console.error(error);
  }
}

/**
 *
 * This function is used to retrieve all the views count and all the blog post in the database.
 * It first retrieves the total views count using a predefined function "views_sum" in supabase.
 * Then it retrieves all the records from "views" table.
 */
export async function getAllViews() {
  try {
    // views_sum is defined in supabase
    const { data: totalViews } = await supabase.rpc("views_sum");
    const { data: posts } = await supabase.from("views").select("*");

    return {
      totalViews,
      posts,
    };
  } catch (error) {
    console.error(error);
  }
}
