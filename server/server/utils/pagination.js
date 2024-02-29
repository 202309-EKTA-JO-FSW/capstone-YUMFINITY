// pagination handling function
function pagination(queries, restaurants) {
  const page = parseInt(queries.page, 10) || 1;
  const limit = parseInt(queries.limit, 10) || 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const restaurantList = restaurants.slice(startIndex, endIndex);
  const totalPages = Math.ceil(restaurants.length / limit);

  if (page > totalPages || page < 1)
    return Error(
      `Page should be in total pages range, you requested ${page}. Pages range is 1 - ${totalPages}`,
    );

  return {
    page: page,
    totalPages: totalPages,
    totalResult: restaurants.length,
    results: restaurantList,
  };
}

module.exports = pagination;
