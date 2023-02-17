import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState, useEffect, ReactNode, FC } from 'react'
import { useAuth } from '@contexts/auth';

interface UnauthorizedProps {
  children?: ReactNode;
}

const Unauthorized: FC<UnauthorizedProps> = ({
  children
}) => {
  const { user } = useAuth();
  if (user) {
    return null;
  }

  return <>{children}</>;
};

export default Unauthorized;