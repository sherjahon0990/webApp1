import React, { useState, useEffect, useRef } from "react";
import Header from "../Header";
import { Route, Routes, useLocation } from "react-router";
import Kurslar from "../Kurslar";
import Duolar from "../Duolar";
import Suralar from "../Suralar";
import Lessons from "../Lessons";
import { AnimatePresence, motion } from "framer-motion";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
import styled from "styled-components";
import Cards from "../Cards";

export default ({ darkMode, setDarkMode }) => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const lastVisitedPages = useRef({});
  useEffect(() => {
    const now = Date.now();
    const path = location.pathname;

    // Get visit timestamps from sessionStorage
    const stored = sessionStorage.getItem("visitedPages");
    const visitedPages = stored ? JSON.parse(stored) : {};

    const lastVisited = visitedPages[path];
    const shouldShowLoading = !lastVisited || now - lastVisited > 20000;

    if (shouldShowLoading) {
      setLoading(true);
      const timeout = setTimeout(() => setLoading(false), 800);
      visitedPages[path] = now;
      sessionStorage.setItem("visitedPages", JSON.stringify(visitedPages));
      return () => clearTimeout(timeout);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  const Row = styled.div`
    display: grid;
    gap: 10px;
    grid-template-columns: repeat(3, auto);
    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(1, auto);
    }
  `;

  const withSkeleton = (Component, skeletonJSX) =>
    loading ? (
      skeletonJSX
    ) : (
      <motion.div
        initial={{ x: "0%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "0%", opacity: 0 }}
        transition={{ duration: 0.4 }}
      >
        {Component}
      </motion.div>
    );

  return (
    <div>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={withSkeleton(
              <Header darkMode={darkMode} setDarkMode={setDarkMode} />,
              <Stack spacing={1}>
                <Skeleton
                  variant="rectangular"
                  height={250}
                  sx={{ width: "100%" }}
                />
                <Skeleton
                  variant="rounded"
                  height={30}
                  sx={{ width: "100%" }}
                />
                <Row>
                  {[...Array(6)].map((_, i) => (
                    <Skeleton
                      key={i}
                      variant="rounded"
                      height={200}
                      sx={{ width: "100%" }}
                    />
                  ))}
                </Row>
              </Stack>
            )}
          />
          <Route
            path="kurslar"
            element={withSkeleton(
              <Kurslar darkMode={darkMode} setDarkMode={setDarkMode} />,
              <Stack spacing={1}>
                <Skeleton
                  variant="rectangular"
                  height={30}
                  sx={{ width: "100%" }}
                />
                <Row>
                  {[...Array(9)].map((_, i) => (
                    <Skeleton
                      key={i}
                      variant="rounded"
                      height={200}
                      sx={{ width: "100%" }}
                    />
                  ))}
                </Row>
              </Stack>
            )}
          />
          <Route
            path="duolar"
            element={withSkeleton(
              <Duolar />,
              <Skeleton variant="rounded" height={30} sx={{ width: "100%" }} />
            )}
          />
          <Route
            path="suralar"
            element={withSkeleton(
              <Suralar />,
              <Skeleton variant="rounded" height={30} sx={{ width: "100%" }} />
            )}
          />
          <Route
            path="/"
            element={withSkeleton(
              <Cards />,
              <Stack spacing={1}>
                <Skeleton
                  variant="rectangular"
                  height={450}
                  sx={{ width: "100%" }}
                />
                <Skeleton
                  variant="rounded"
                  height={30}
                  sx={{ width: "100%" }}
                />
              </Stack>
            )}
          />
          <Route
            path="/lesson/:id"
            element={withSkeleton(
              <Lessons />,
              <Stack spacing={1}>
                <Skeleton
                  variant="rectangular"
                  height={450}
                  sx={{ width: "100%" }}
                />
                <Skeleton
                  variant="rounded"
                  height={30}
                  sx={{ width: "100%" }}
                />
              </Stack>
            )}
          />
        </Routes>
      </AnimatePresence>
    </div>
  );
};
