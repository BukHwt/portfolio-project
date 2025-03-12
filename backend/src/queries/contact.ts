export const queries = {
  INSERT_CONTACT: `
      INSERT INTO contact_submissions (name, email, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `,
};
