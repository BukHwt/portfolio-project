export const queries = {
  GET_EMPLOYMENT_HISTORY: `
  SELECT 
    eh."id", 
    eh.company, 
    eh."position", 
    eh."location", 
    eh.start_month_year, 
    eh.end_month_year, 
    ARRAY_AGG(jd.description ORDER BY jd.id) AS "description" 
  FROM employment_history eh 
  JOIN job_descriptions jd ON eh.id = jd.employment_id 
  GROUP BY eh."id", eh.company, eh."position", eh."location", eh.start_month_year, eh.end_month_year;
`,
};
