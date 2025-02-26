export const queries = {
  GET_EDUCATION: `
    SELECT
    ed."id",
    ed.school,
    ed.degree,
    ed.start_month_year,
    ed.end_month_year,
    ed.description
    FROM education ed
    `,
};
