import { useRouter } from 'next/router'
import Link, { LinkProps } from 'next/link'
import React, { PropsWithChildren, useState, useEffect, ReactNode, FC } from 'react'
import { useAuth } from '@contexts/auth';

interface AuthorizedProps {
  children?: ReactNode;
}

const Authorized: FC<AuthorizedProps> = ({
  children
}) => {
  const { user } = useAuth();
  if (!user) {
    return null;
  }

  return <>{children}</>;
};

export default Authorized;