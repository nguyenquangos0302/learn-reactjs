import React from "react";
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";

ProductSkeletonList.propTypes = {
  length: PropTypes.number,
};

ProductSkeletonList.defaultProps = {
  length: 6,
};

function ProductSkeletonList(props) {
  const { length } = props;
  return (
    <Box>
      <Grid container spacing={0}>
        {Array.from(new Array(length)).map((data, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={118} />
                <Skeleton />
                <Skeleton width="100%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
}

export default ProductSkeletonList;
